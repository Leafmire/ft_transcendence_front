import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import logoPic from '@/public/42_Logo.svg';

export default function IndexPage() {
  return (
		<div className="relative isolate overflow-hidden">
		<svg
			className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
			aria-hidden="true"
		>
			<defs>
			<pattern
				id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
				width={200}
				height={200}
				x="50%"
				y={-1}
				patternUnits="userSpaceOnUse"
			>
				<path d="M.5 200V.5H200" fill="none" />
			</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
		</svg>
		<div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
			<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
			<Image
				className="w-20"
				src={logoPic}
				alt="42_transcendence"
			/>
			<h1 className="mt-10 text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl">
				Welcome to 42 ft_transcendence Website
			</h1>
			<p className="mt-6 text-lg leading-8 text-zinc-400">
				This site was made for Pong game with multiplayer. For playing, you must have 42 student account.
			</p>
			<div className="mt-10 flex items-center gap-x-6">
				<Link
				href="/login"
				className="rounded-md bg-teal-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
				Login
				</Link>
				<a href="#" className="text-sm font-semibold leading-6 text-indigo-100">
				How-to-play <span aria-hidden="true">→</span>
				</a>
			</div>
			</div>
			<div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
			<div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
        <Image
          className="ring-1 ring-gray-500 ring-offset-4 ring-offset-white rounded"
          src="/pong.webp"
          alt="42_transcendence"
          width={900}
          height={900}
        />
			</div>
			</div>
		</div>
		</div>
  )
}
