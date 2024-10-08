'use client'

import { fields } from "@/store/Fields"
import { useDispatch } from "react-redux"
import { setFilter } from "@/store/filterSlice"


const Filter = () => {

    const dispatch = useDispatch();
    const OptionValueHandler = e => {
        dispatch(setFilter(e.target.value))
        // console.log(e.target.value)
    }
    const par = `حدد اي فرع تود ان تأخد المعلومات عنه من خلال استخدام الـفلتـــر ادناه`
    return (
        <div className="">
            <p className="text-lg font-semibold p-6 text-warning">{par}</p>
            <label htmlFor="category" className=" text-lg font-bold px-6">اختر الكلية المطلوبة  :  </label>
            <select
                className="select  select-success w-full max-w-xs px-10 my-4 mx-4" dir='rtl'
                id="category" onChange={OptionValueHandler}>
                <option disabled selected defaultValue="" value='' className="text-lg ">اختر الكلية المطلوبة ادناه  </option>
                <option defaultValue="" value='' className="text-lg ">كل الكليات</option>
                {/* map over the fields */}
                {fields.map((field, i) => <option defaultValue={field.Acronym} value={field.Acronym} className="text-lg " key={field.Id}>{field.Arabic}</option>)}


            </select>
        </div >
    )
}
export default Filter
