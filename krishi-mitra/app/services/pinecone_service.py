# import pinecone
from pinecone import Pinecone, ServerlessSpec
from app.services.openai_service import get_embedding
import os
import dotenv
from dotenv import load_dotenv

load_dotenv()

PINECONE_API_KEY = "bc2409cd-3568-4ffb-873d-faa8ad73e236"
# pinecone.init(api_key=PINECONE_API_KEY, environment='gcp-starter')
pinecone = Pinecone(api_key=PINECONE_API_KEY, environment='MyLLMTest')
EMBEDDING_DIMENSION = 1536

def embed_chunks_and_upload_to_pinecone(chunks, indexname):
    # if indexname in pinecone.list_indexes():
    if indexname in pinecone.list_indexes().names():
       print("working fine")
        # print("\nIndex already exists. Deleting index ...")
        # pinecone.delete_index(name=indexname)
    
    # print("\nCreating a new index: ", indexname)
    # pinecone.create_index(name=indexname,
    #                     #   dimension=EMBEDDING_DIMENSION, metric='cosine')
    #                     dimension=EMBEDDING_DIMENSION, metric='cosine',
    #                       spec=ServerlessSpec(
    #                         cloud="aws",
    #                         region="us-west-2")
    # )
    index = pinecone.Index(indexname)

    # Embedding each chunk and preparing for upload
    print("\nEmbedding chunks using OpenAI ...")
    embeddings_with_ids = []
    for i, chunk in enumerate(chunks):
        embedding = get_embedding(chunk)
        embeddings_with_ids.append((str(i), embedding, chunk))

    print("\nUploading chunks to Pinecone ...")
    upserts = [(id, vec, {"chunk_text": text}) for id, vec, text in embeddings_with_ids]
    index.upsert(vectors=upserts)

    print(f"\nUploaded {len(chunks)} chunks to Pinecone index\n'{indexname}'.")


def get_most_similar_chunks_for_query(query, indexname):
    print("\nEmbedding query using OpenAI ...")
    question_embedding = get_embedding(query)

    print("\nQuerying Pinecone index ...")
    index = pinecone.Index(indexname)
    # query_results = index.query(question_embedding, top_k=3, include_metadata=True)
    query_results = index.query(vector=question_embedding, top_k=3, include_metadata=True)
    context_chunks = [x['metadata']['chunk_text'] for x in query_results['matches']]

    return context_chunks   


def delete_index(indexname):
  if indexname in pinecone.list_indexes():
    print("\nDeleting index ...")
    pinecone.delete_index(name=indexname)
    print(f"Index {indexname} deleted successfully")
  else:
     print("\nNo index to delete!")