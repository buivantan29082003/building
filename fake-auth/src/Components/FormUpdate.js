import { useEffect, useState } from "react";

const UpdateForm = ({ onUpdate, onClose }) => {
  const [student, setStudent] = useState({
    birthday: new Date(),
    status: null,
  });
  useEffect(() => {
    let date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    setStudent({ ...student, birthday: date });
  }, []); 

  return (
    <>
      <div className="w-11/12 mx-auto "> 
          <div className="w-full flex items-start mb-4  ">
            <label className="w-2/12 ">Nhập tên</label>
            <div className="w-9/12">
              <input className="px-4 w-full py-1 border rounded-md bg-gray-50 hover:bg-white hover:outline-none" />
              <span className="text-xs text-red-500">Chữ </span>
            </div>
          </div>
          <div className="w-full flex items-start mb-4">
            <label className="w-2/12 ">Tình trạng</label>
            <div className="w-9/12">
              <select
                onChange={(e) => {}}
                value={-1}
                className="px-4 appearance-none w-full py-1 border rounded-md bg-gray-50 hover:bg-white hover:outline-none"
              >
                <option>Chọn trạng thái</option>
                {[].map((v, index) => {
                  return <option value={index}>{v.statusName}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="w-full flex items-start mb-4">
            <label className="w-2/12 ">Giới tính</label>
            <div className="flex w-9/12 gap-2 flex-wrap">
              <input className="accent-blue-600" name="gender" type="radio" />
              Nam
              <input className="accent-blue-600" name="gender" type="radio" />
              Nữ
              <span className="w-full text-xs text-red-500">Hello</span>
            </div>
          </div>
          <div className="w-full flex items-start mb-4">
            <label className="w-2/12 ">Ngày sinh</label>
            <div className="w-9/12  ">
              <input
                type="date"
                onChange={(e) => {}}
                value={""}
                className="px-4 w-full py-1 border rounded-md bg-gray-50 hover:bg-white hover:outline-none"
              />
              {/* <span></span> message lỗi.*/}
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="text-black" onClick={onClose}>
            Hủy
          </button>
          <button
            className="text-black"
            onClick={() => {
              //   onUpdate();
              //   onClose();
            }}
          >
            Xác nhận
          </button> 
      </div>
    </>
  );
};

export default UpdateForm;
