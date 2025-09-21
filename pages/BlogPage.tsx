
import React from 'react';

const BlogHero = () => (
    <section className="relative bg-purple-800 text-white py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('./images/blog-hero-bg.svg')" }}>
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Insights, stories, and news from the Care Spree team. Stay informed and inspired.</p>
        </div>
    </section>
);

interface Post {
    category: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    author: string;
    date: string;
}

const blogPosts: Post[] = [
    {
        category: 'NDIS Insights',
        title: 'Navigating Your NDIS Plan for the First Time',
        excerpt: 'Understanding your NDIS plan can be overwhelming. Here are our top tips to help you get started and make the most of your funding.',
        imageUrl: './images/blog-post-placeholder-1.svg',
        author: 'Gaganpreet Singh Anand',
        date: 'July 25, 2024',
    },
    {
        category: 'Community',
        title: 'The Power of Community Participation',
        excerpt: 'Discover the benefits of getting involved in community activities and how it can boost well-being and build lasting connections.',
        imageUrl: './images/blog-post-placeholder-2.svg',
        author: 'Archana Anand',
        date: 'July 22, 2024',
    },
    {
        category: 'Wellness',
        title: 'Tips for Healthy Meal Prep on a Budget',
        excerpt: 'Eating healthy doesn\'t have to be expensive. Our experts share their secrets for delicious and affordable meal preparation.',
        imageUrl: './images/blog-post-placeholder-3.svg',
        author: 'Ashish Sachdeva',
        date: 'July 18, 2024',
    },
];

const BlogPostCard: React.FC<Post> = ({ category, title, excerpt, imageUrl, author, date }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col group animate-on-scroll">
        <div className="relative image-hover-effect">
            <img src={imageUrl} alt={`Blog post about ${title}`} className="w-full h-56 object-cover" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase">{category}</p>
            <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white flex-grow">{title}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">{excerpt}</p>
            <div className="mt-6 flex items-center">
                <img className="h-10 w-10 rounded-full object-cover" src="./images/blog-author-avatar.svg" alt={`Avatar of ${author}`} />
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
                </div>
            </div>
             <div className="mt-4 text-right">
                <a href="#" onClick={(e) => e.preventDefault()} className="text-purple-600 dark:text-purple-400 font-semibold hover:underline cursor-not-allowed opacity-50">
                    Read More <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>
    </div>
);


const BlogPage: React.FC = () => {
    return (
        <>
            <BlogHero />
            <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 animate-on-scroll">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Latest Articles</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Full articles coming soon!</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                             <BlogPostCard key={index} {...post} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;
