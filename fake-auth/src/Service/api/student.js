import generateResult from "../GenerateResult"; 

const KEY="data" 

const getAll = () => {
    let rough = localStorage.getItem(KEY)
    if (rough==null){
        return []
    }
    try {
        const data = JSON.parse(rough)
        return Array.isArray(data) ? data : []
    } catch {
        return []
    }
}


const getById=(id)=>{
    return getAll().find(v => v.id === id)!=null || null;
}


const insert=(data)=>{
    let datas=getAll();
    //  check valid (trùng email........);
    datas.push(data);
    localStorage.setItem(KEY,JSON.stringify(datas))
    return generateResult(true, "Thành công")
}


const update=(data)=>{
    const oldData=getById(data.id) 
    if(oldData!=null){
        let datas=getAll();
        datas.forEach((v, i) => {
            if (v.id === data.id) {
                datas[i] = data
            }
        })
        localStorage.setItem(KEY,JSON.stringify(datas))
        return generateResult(true,"Cập nhật thành công")
    }
    return generateResult(false," Không tìm thấy bản ghi cần cập nhật")
}

const remove=(id)=>{
    const dataDelete=getById(id);
    if(dataDelete!=null){
        const datas=getAll()
        let newDatas= datas.filter(v=>{
            return v.id!==id
        })
        localStorage.setItem(KEY,JSON.stringify(newDatas))
        return generateResult(true,"Xóa thành công bản ghi")
    }
    return generateResult(false,"Không tìm thấy bản ghi cần xóa");
}


module.exports={
    getAll:getAll,
    getById:getById,
    insert:insert,
    update:update,
    remove:remove
}