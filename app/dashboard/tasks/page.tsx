"use client"
import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import { tasks } from './data/tasks'

export default function Tasks() {
  return (
    
    <>
    <div className="p-6">
      <div className='mb-2 flex items-center justify-between space-y-2'>
        <div>
          <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
          <p className='text-muted-foreground'>
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
      </div>
      <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
        <DataTable data={tasks} columns={columns} />
      </div>
    </div>
  </>
  )
}
