export default async function Page() {
  return (
    <div className="w-[1200px] rounded-xl bg-gray-50 p-8">
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-4">
          <h2 className="mb-6 text-2xl font-bold">PDF Convert List</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="rounded-xl bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500">description</span>
                <h3 className="font-semibold">pdf to image</h3>
              </div>
              <p className="text-sm text-gray-500">在线pdf转image，把pdf转换成图片格式</p>
            </div>

            <div className="rounded-xl bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500">description</span>
                <h3 className="font-semibold">pdf to docx</h3>
              </div>
              <p className="text-sm text-gray-500">在线pdf转docx，把pdf转换成docx格式的文件</p>
            </div>

            <div className="rounded-xl bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500">slideshow</span>
                <h3 className="font-semibold">pdf转pptx</h3>
              </div>
              <p className="text-sm text-gray-500">在线pdf转pptx，把pdf转换成pptx格式的文件</p>
            </div>

            <div className="rounded-xl bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500">code</span>
                <h3 className="font-semibold">pdf转html</h3>
              </div>
              <p className="text-sm text-gray-500">
                在线pdf转html，把pdf转换成html格式的文件，方便网页展示
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-green-500">code</span>
                <h3 className="font-semibold">xml转pdf</h3>
              </div>
              <p className="text-sm text-gray-500">在线xml转pdf，把XML转换成PDF，方便阅读</p>
            </div>

            <div className="rounded-xl bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-800">text_snippet</span>
                <h3 className="font-semibold">txt转pdf</h3>
              </div>
              <p className="text-sm text-gray-500">在线txt转pdf，把TXT转换成PDF，方便阅读</p>
            </div>

            <div className="rounded-xl bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500">table_view</span>
                <h3 className="font-semibold">pdf转xlsx</h3>
              </div>
              <p className="text-sm text-gray-500">在线pdf转xlsx，把pdf转换成xlsx格式文件</p>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <h2 className="mb-6 mt-8 text-2xl font-bold">PPT Convert</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="rounded-xl bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500">slideshow</span>
                <h3 className="font-semibold">ppt转pdf</h3>
              </div>
              <p className="text-sm text-gray-500">
                在线ppt转pdf，把ppt、pptx、pps、ppsx等PowerPoint转换成pdf
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-orange-500">image</span>
                <h3 className="font-semibold">ppt转image</h3>
              </div>
              <p className="text-sm text-gray-500">
                在线ppt转image，把ppt、pptx、pps、ppsx等PowerPoint转换成图片
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
