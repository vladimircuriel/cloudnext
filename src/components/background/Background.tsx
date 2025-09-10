export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-0 h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.30)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
      {children}
    </div>
  )
}
