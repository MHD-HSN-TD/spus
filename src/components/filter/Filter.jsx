'use client'

import { setFilter } from "@/store/filterSlice"
import { univFields } from "@/store/uniFields"
import { useDispatch } from "react-redux"

const Filter = () => {

    const dispatch = useDispatch();
    const OptionValueHandler = e => {
        dispatch(setFilter(univFields, "civil"))
        console.log(e.target.value)
    }
    return (
        <div className="p-6">

            <label htmlFor="category" className=" text-lg font-bold">اختر الفرع المطلوب :  </label>
            <select
                className="select  select-success w-full max-w-xs px-10 my-4" dir='rtl'
                id="category" onChange={OptionValueHandler}>
                <option disabled selected></option>
                <option defaultValue="it" value='it' className="text-l pt-10">الهندسة المعلوماتية</option>
                <option defaultValue='civil' value="civil" className="text-l">الهندسة المدنية</option>
                <option defaultValue="arch" value='arch' className="text-l">هندسة العمارة</option>
                <option defaultValue="medicine" value='medicine' className="text-l">الطب البشري</option>
            </select>
        </div >
    )
}
export default Filter
