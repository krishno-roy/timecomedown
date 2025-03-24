import React from "react";
import BlogImg1 from '../../assets/blog-1.png'
import BlogImg2 from '../../assets/blog-2.png'
import BlogImg3 from "../../assets/blog-3.png";

const blogPosts = [
  {
    date: "August 15, 2023",
    category: "UX",
    title: "Typography Tips for Design Success",
    description:
      "Dive into the world of web typography and discover how to choose, pair, and optimize fonts for compelling and readable digital designs.",
    image: BlogImg1 ,
    link: "#",
  },
  {
    date: "August 15, 2023",
    category: "UX",
    title: "Color Psychology in UX",
    description:
      "Explore how color choices impact user emotions and decision-making in UX design.",
    image:BlogImg2,
    link: "#",
  },
  {
    date: "August 15, 2023",
    category: "UX",
    title: "Boosting UX with Microinteractions",
    description:
      "Discover the power of microinteractions in enhancing user experience and engagement.",
    image: BlogImg3 ,
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 px-6 bg-white text-center" id="blog">
      <h2 className="text-3xl font-bold mb-3">
        Design Insights and Inspiration
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Discover industry insights, expert tips, and design inspiration. Stay
        updated with the latest trends in web design and user experience.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <p className="text-sm text-gray-500">
                {post.date} / {post.category}
              </p>
              <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{post.description}</p>
              <a
                href={post.link}
                className=" font-semibold mt-4 inline-block hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
