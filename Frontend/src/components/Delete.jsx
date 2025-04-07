function Delete() {
  return(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(0,0,0,0.2)] px-4 backdrop-blur-[2px] transition-all duration-500">
      <div className="w-full max-w-[25rem] space-y-4 rounded-lg bg-white px-6 py-7 xl:space-y-5 xl:p-8">
        <p>Delete comment</p>
        <p>Are you sure you want to delete this comment? This will remove the comment and can’t be undone.</p>
        <div>
          <button>No, Cancel</button>
          <button>Yes, Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Delete