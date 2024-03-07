/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/VJjhlsONzKD
 */
import Link from "next/link"

export function billing() {
  return (
    <div className="w-full py-6">
      <div className="container grid max-w-3xl px-4 items-center gap-6 md:px-6">
        <div className="space-y-1 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Choose the perfect plan for your team</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Get started with automated testing, continuous integration, and collaboration for every team.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col space-y-2 border rounded-lg border-gray-100 border-gray-100 bg-gray-50 shadow-sm p-4 text-sm dark:bg-gray-950 dark:border-gray-800 dark:border-gray-800">
            <div className="space-y-1.5">
              <div className="text-2xl font-bold">Starter</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">For small teams getting started with CI/CD</p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                <span className="text-sm">2 concurrent builds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                <span className="text-sm">1000 CI minutes/month</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                <span className="text-sm">10K pipeline minutes/month</span>
              </div>
            </div>
            <div className="flex items-end mt-auto">
              <div className="text-3xl font-bold">$19</div>
              <span className="text-sm text-gray-500 underline translate-y-1 dark:text-gray-400">/user/month</span>
            </div>
            <Link
              className="inline-block w-full h-10 rounded-md border border-gray-200 border-gray-200 bg-white text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 justify-center disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              Start with Starter
            </Link>
          </div>
          <div className="flex flex-col space-y-2 border rounded-lg border-gray-100 border-gray-100 bg-white shadow-sm p-4 text-sm dark:bg-gray-950 dark:border-gray-800 dark:border-gray-800">
            <div className="space-y-1.5">
              <div className="text-2xl font-bold">Pro</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">For growing teams with advanced automation</p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                <span className="text-sm">5 concurrent builds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                <span className="text-sm">3000 CI minutes/month</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                <span className="text-sm">20K pipeline minutes/month</span>
              </div>
            </div>
            <div className="flex items-end mt-auto">
              <div className="text-3xl font-bold">$99</div>
              <span className="text-sm text-gray-500 underline translate-y-1 dark:text-gray-400">/user/month</span>
            </div>
            <Link
              className="inline-block w-full h-10 rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
