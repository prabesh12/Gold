

const ViewAll = () => {
    const handlesubmit =()=>{
        console.log("hello world");
    }
  return (
    <div className="view-all-button-wrapper mt-4">
    <button className="view-all" id="view-all"  onClick={handlesubmit}>View All</button>
    </div>
  )
}

export default ViewAll