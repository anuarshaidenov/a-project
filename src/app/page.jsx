import Button from '@/components/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="md:flex md:items-start md:gap-6">
        <div className="md:grow md:shrink-0">
          <div className="rounded border border-gray-50 p-2 mb-20 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div className="space-y-4">
              <h2 className="font-bold">
                Stay safe! Enable two-factor authentication now
              </h2>
              <p>
                Your account doesn&apos;t have a protection enabled yet. Enable
                it
              </p>
            </div>
            <div className="self-end md:self-start">
              <Button>Enable 2FA</Button>
            </div>
          </div>
          <div className="mb-20">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-bold text-xl">Mining Status</h2>
              <Link className="text-blue-400" href={'/'}>
                Manage rings
              </Link>
            </div>
            <div className="rounded border bg-blue-950 border-gray-50 px-2 py-10 text-center grid place-items-center">
              <div className="rounded-full bg-yellow-50 h-20 w-20 mx-auto mb-4"></div>
              <h2 className="font-bold text-xl mb-6">No rings connected yet</h2>
              <p className="text-xs mb-6">
                You can connect your rings to start mining. You can also create
                a new ring or join an existing one.
              </p>
              <p className="text-xs pt-4 border-t border-gray-50">
                Don&apos;t have a hashmining software yet?
              </p>
              <Link className="text-blue-400 text-xs" href={'/'}>
                Download Miner
              </Link>
            </div>
          </div>
          <div className="mb-20">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-bold text-xl">Mining Status</h2>
              <Link className="text-blue-400" href={'/'}>
                Manage rings
              </Link>
            </div>
            <div className="rounded border bg-blue-950 border-gray-50 px-2 py-10 text-center grid place-items-center">
              <div className="rounded-full bg-yellow-50 h-20 w-20 mx-auto mb-4"></div>
              <h2 className="font-bold text-xl mb-6">No rings connected yet</h2>
              <p className="text-xs mb-6">
                You can connect your rings to start mining. You can also create
                a new ring or join an existing one.
              </p>
              <p className="text-xs pt-4 border-t border-gray-50">
                Don&apos;t have a hashmining software yet?
              </p>
              <Link className="text-blue-400 text-xs" href={'/'}>
                Download Miner
              </Link>
            </div>
          </div>
        </div>
        <div className="md:basis-[350px]">
          <div className="mb-20">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-bold text-xl">Mining Status</h2>
              <Link className="text-blue-400" href={'/'}>
                Manage rings
              </Link>
            </div>
            <div className="rounded border bg-blue-950 border-gray-50 px-2 py-10 text-center grid place-items-center">
              <div className="rounded-full bg-yellow-50 h-20 w-20 mx-auto mb-4"></div>
              <h2 className="font-bold text-xl mb-6">No rings connected yet</h2>
              <p className="text-xs mb-6">
                You can connect your rings to start mining. You can also create
                a new ring or join an existing one.
              </p>
              <p className="text-xs pt-4 border-t border-gray-50">
                Don&apos;t have a hashmining software yet?
              </p>
              <Link className="text-blue-400 text-xs" href={'/'}>
                Download Miner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
