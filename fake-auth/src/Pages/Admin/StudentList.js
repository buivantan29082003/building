import UpdateForm from "../../Components/FormUpdate";
import CustomModal from "../../Components/Modal";
 
const StudentList = () => {
  return (
    <>
      Danh sách Sinh viên  
      <div className="w-8/12 mx-auto">
        <table class="table-fixed w-full">
          <thead className="bg-gray-100">
            <tr >
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,4,4,5,566].map(v=>{
                return <>
                    <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                    <td><CustomModal title={"Form cập nhật"} titleButton={"Cập nhật"} content={<UpdateForm onUpdate={()=>{alert("Hello")}}/>}/></td>
                    </tr>
                </>
            })}
             
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentList;
