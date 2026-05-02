import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-0 px-8 py-8 font-sans">
      <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
        <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
          <path d="M16 4L4 12v16h8v-8h8v8h8V12L16 4z" fill="#c7d2fe" stroke="#4338ca" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M13 20h6" stroke="#4338ca" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      <h2 className="font-serif text-[clamp(100px,20vw,160px)] leading-none text-indigo-600 tracking-tighter relative">
        404
      </h2>

      <div className="w-14 h-0.5 bg-linear-to-r from-indigo-600 to-indigo-300 rounded-full my-5" />

      <h1 className="text-2xl md:text-3xl font-serif font-bold text-center mb-2">
        Page not found
      </h1>
      <p className="text-sm text-gray-500 text-center max-w-sm leading-relaxed mb-8">
        Looks like this page took a wrong turn. The course you&apos;re looking for might have moved or doesn&apos;t exist.
      </p>

      <Link href="/" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:-translate-y-0.5">
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
          <path d="M8 2L2 7h2v7h4v-4h4v4h4V7h-2L8 2z" fill="white"/>
        </svg>
        Back to home
      </Link>

      <div className="flex gap-3 mt-6 flex-wrap justify-center">
        <Link href="/all-courses" className="text-xs px-4 py-1.5 rounded-full border border-indigo-200 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors">
          Browse courses
        </Link>
        <Link href="/profile" className="text-xs px-4 py-1.5 rounded-full border border-indigo-200 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors">
          My profile
        </Link>
      </div>
    </div>
  );
};

export default NotFound;