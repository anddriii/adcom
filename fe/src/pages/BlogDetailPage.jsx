/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { fetchPostBySlug } from '../api/dummyBlog';
import BlogSection from '../components/BlogSection';

// Komponen kecil untuk metadata
const MetaItem = ({ icon, text }) => (
  <div className="flex items-center text-sm text-gray-500">
    {icon}
    <span className="ml-2">{text}</span>
  </div>
);

const PostDetailPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const loadPostData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/api/v1/posts/${slug}`);
      if (!response.ok) throw new Error("Artikel tidak ditemukan");
      
      const resJson = await response.json();
      console.log(resJson); // cek di console
      
      setPost(resJson.data); // karena "data" berisi artikel
    } catch (err) {
      setError("Artikel tidak ditemukan.");
    } finally {
      setLoading(false);
    }
  };
  loadPostData();
}, [slug]);


  if (loading) return <div className="text-center py-40">Loading post...</div>;
  if (error) return <div className="text-center py-40 text-red-500 font-bold">{error}</div>;
  if (!post) return null;

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/" className="hover:underline">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{post.title}</span>
        </nav>

        {/* Header Artikel */}
        <header className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4">
            <MetaItem icon={"👤"} text={post.author} />
            <MetaItem icon={"📅"} text={new Date(post.createdAt).toLocaleDateString()} />
            <MetaItem icon={"📁"} text={post.category.join(", ")} />
          </div>
        </header>

        {/* Gambar Utama */}
        <img src={post.image} alt={post.title} className="w-full h-auto rounded-2xl shadow-lg mb-8" />

        {/* Konten Artikel */}
        <article className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}>
        </article>


        {/* Author Box (saat ini masih statis) */}
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl flex items-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <p className="font-bold text-gray-800">{post.author}</p>
            <p className="text-gray-600 text-sm">Penulis adalah seorang developer yang bersemangat dalam berbagi pengetahuan tentang teknologi web dan mobile.</p>
          </div>
        </div>

      </div>
      <div className="container mx-auto px-6 max-w-4xl mt-12 ">
        <p className='text-2xl font-bold text-gray-800 mb-4 text-center'>Blog Lainnya</p>
        <BlogSection showTitle={false}/>
      </div>
    </div>
  );
};

export default PostDetailPage;