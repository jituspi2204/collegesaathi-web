import React, { useEffect, useState }  from 'react'
import SubHeading from '../components/subHeading/SubHeading'
import Tabs from '../components/tabs/Tabs'
import useMarks from '../hooks/useMarks'

const Result = (props) => {
    const [rollno, setRollno] = useState('')
    const [enable, setEnable] = useState(false)

    const { data, status, error, refetch } = useMarks(rollno, enable)

    useEffect(() => {
        if(rollno && rollno.length === 11){
            setEnable(false)
            refetch()
        }
        else setEnable(false)
    }, [rollno])

    useEffect(() => {
        console.log("Calling USEEffect")
        if( props.load ) setEnable(false)
    }, [props])


    console.log("Roll no", rollno)
    console.log("data =>", data)

    return (
        <div className="">
          <input
            value={rollno}
            maxLength={11}
            onChange={(e) => setRollno(e.target.value)}
            placeholder="Search by Roll Number"
            className="text-black p-2 rounded-md mb-2 w-full lg:w-2/3"
          />
          {
              status === "loading" ? <p>Loading..</p>
              : status === "error" ? <p>Eror...</p>
              : status === "success" && data.user ? (
                  <>

      <SubHeading title="Basic Details" />
      <div className="grid grid-cols-2 bg-gray-700 p-5 lg:w-2/3   mb-8 rounded">
        <p>Name</p>
        <p className="font-semibold">{data.user.name}</p>
        <p>Roll Number</p>
        <p className="font-semibold">{data.user.rollno}</p>
        <p>Course</p>
        <p className="font-semibold">{data.user.course}</p>
        <p>Percentage %</p>
        <p className="font-semibold">{data.user.percentage}</p>
        <p>Marks (Obtained / total )</p>
        <p className="font-semibold">
          {data.user.obtained} / {data.user.total}
        </p>
        <p>CGPA</p>
        <p className="font-semibold">{data.user.cgpa}</p>
        <p>College</p>
        <p className="font-semibold">{data.user.college}</p>
      </div>
      <Tabs rollno={data.user.rollno}/>
      </>
              ) : <p>Search Another Student's result</p>
          }
          <section>
            
          </section>
        </div>
    )
}

export default Result
