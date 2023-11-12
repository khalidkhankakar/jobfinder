'use client'
import { useRef, useState, useContext } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Loading from '@/app/loading';
import Image from 'next/image';
import DialogModal from './DialogModal';
import JobContext from '@/context/JobContext';
import axios from 'axios';


export default function JobDescription({initialValue, limit}) {
  const {jobData, setJobData} = useContext(JobContext)

const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);
  const sizeLimit = limit ?? 50000;
  const [ value, setValue ] = useState(initialValue ?? '');
  const [ length, setLength ] = useState(0);

  const handleInit = (evt, editor) => {
    setLength(editor.getContent({ format: 'text' }).length);
  };

  const handleUpdate = (value, editor) => {
    const length = editor.getContent({ format: 'text' }).length;
    if (length <= sizeLimit) {
      setValue(value);
      setLength(length);
      setJobData({
        userId:jobData.userId,
        company: jobData.company,
        contactEmail: jobData.contactEmail,
        name: jobData.name,
        phone: jobData.phone,
        heard: jobData.heard,
        jobtitle: jobData.jobtitle,
        hired: jobData.hired,
        location:jobData.location,
        jobtype: jobData.jobtype,
        jobduration: jobData.jobduration,
        salary: jobData.salary,
        jobdesc:value
      })
    }
  };

  const handleBeforeAddUndo = (evt, editor) => {
    const length = editor.getContent({ format: 'text' }).length;
    if (length > sizeLimit) {
      evt.preventDefault();
    }
  };
  const handlePostJob = async (e) => { 
    try {
      e.preventDefault();
      setLoading(true)
      const resp = await axios.post("/api/employeer", jobData);
      setJobData({
        userId:'',
        company: '',
        contactEmail: '',
        name: '',
        phone:'',
        heard: '',
        jobtitle: '',
        hired: '',
        location:'',
        jobtype: '',
        jobduration:'',
        salary: '',
        jobdesc:''
      });
      setValue('');
      router.push("/")
      if (resp.data.saved) {
        toast("Account is created successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      } else {
        toast("Invalid credtionals try again", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }



    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }


    
   }

  return (
    <>
    <DialogModal open={open} setOpen={setOpen} />

    <div className="bg-blue-800 flex w-[90%] md:[65%] rounded-lg m-auto my-4 flex-1 flex-col justify-center px-2 py-4 lg:px-8">
    <h2 className="my-3 font-palanquin text-center text-2xl md:text-3xl font-semibold text-yellow-400">
            Descirbe the job
          </h2>
      <Editor
        apiKey='xsypzx1l93mgeakq1wf6dst60ulpuex54yaic4pvylaphkui'
        initialValue={initialValue}
        value={value}
        onInit={handleInit}
        onEditorChange={handleUpdate}
        onBeforeAddUndo={handleBeforeAddUndo}
        init={{
          height: 500,
          menubar: false,
          plugins:[' mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss'],
          toolbar: 'undo redo | fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight  | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          content_style: 'body { font-family:ubuntu,Arial,sans-serif; font-size:19px; background-color:blue; color:white;   }'
        }}
      />
      <div className="flex items-center justify-end space-x-3 my-2">
      <button
                type="submit"
                className="button w-fit"
                onClick={()=>{setOpen((prev)=> !prev)}}
              >
               <Image src={'/eye.svg'} width={20} height={20} alt='eye' className="m-auto" / >&#160;Preview
              </button>
        <button
                type="button"
                className="button w-fit"
                onClick={handlePostJob}
              >
                {loading ? <Image src="/loadingSvg.svg" width={30} height={30} className="h-8 w-8" alt='loading...' /> : <>Post job&#160;<Image src={'/rightArrow.svg'} width={20} height={20} alt='eye' className="m-auto" / ></>}
              </button>

              </div>
            </div>
    </>
  );
}
