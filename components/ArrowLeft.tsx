import Link from "next/link";

export default function ArrowLeft() {
  return (
    <div className='flex justify-start'>
      <Link
        className='text-gray-400 flex items-center justify-center px-4 py-2 hover:text-rose-500'
        href='/blog'>
        <svg
          className='fill-current h-4 w-4 mr-2'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M10 19l-7-7m0 0l7-7m-7 7h18'
          />
        </svg>
        <span>back</span>
      </Link>
    </div>
  );
}
