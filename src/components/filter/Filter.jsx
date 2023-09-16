'use client'

import { fields } from "@/store/Fields"
import { useDispatch } from "react-redux"
import { setFilter } from "@/store/filterSlice"
// import setFilter from '@/store/filterSlice'


const Filter = () => {

    const dispatch = useDispatch();
    const OptionValueHandler = e => {
        dispatch(setFilter(e.target.value))
        console.log(e.target.value)
    }
    return (
        <div className="p-6">

            <label htmlFor="category" className=" text-lg font-bold px-6">اختر الكلية المطلوبة  :  </label>
            <select
                className="select  select-success w-full max-w-xs px-10 my-4" dir='rtl'
                id="category" onChange={OptionValueHandler}>
                <option disabled selected defaultValue="" value='' className="text-lg ">اختر الكلية المطلوبة                                                                                                                                                 ادناه  </option>
                <option defaultValue="" value='' className="text-lg ">كل الجامعات</option>
                {fields.map((field, i) => <option defaultValue={field.Acronym} value={field.Acronym} className="text-lg ">{field.Arabic}</option>)}

                {/* <option defaultValue="it" value='it' className="text-l pt-10">الهندسة المعلوماتية</option>
                <option defaultValue='civil' value="civil" className="text-l">الهندسة المدنية</option>
                <option defaultValue="arch" value='arch' className="text-l">هندسة العمارة</option>
                <option defaultValue="medicine" value='medicine' className="text-l">الطب البشري</option> */}
            </select>
        </div >
    )
}
export default Filter
