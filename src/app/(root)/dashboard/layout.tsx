export default function DashboardLayout({
    children,
    stats,
    trending,
  }: {
    children: React.ReactNode;
    stats: React.ReactNode;
    trending: React.ReactNode;
  }) {
    return (
      <div className="dashboard-layout min-h-screen bg-gray-100">
        {/* Hero header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 h-40 to-violet-600 text-white shadow-lg py-8 mb-16">
          <div className="page-container">
              <h1 className="text-xl font-bold tracking-tight">Dashboard</h1>
              <p className="mt-1 text-blue-100 text-sm">Overview of your activity and trends</p>
          </div>
        </div>
  
        {/* Main content area */}
        <div className="page-container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main content - takes more space */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {children}
              </div>
            </div>
  
            {/* Sidebar - stats + trending stacked */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2 mb-16">
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {stats}
              </div>
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {trending}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }