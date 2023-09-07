'use client'

const Filter = () => {
    const OptionValueHndler = e => console.log(e.target.value)

    return (
        <div className="p-6">

            <label htmlFor="category" className=" text-lg font-bold">اختر الفرع المطلوب :  </label>
            <select
                className="select  select-success w-full max-w-xs px-10 my-4" dir='rtl'
                id="category" onChange={OptionValueHndler}>
                <option disabled selected></option>
                <option value="it" className="text-l pt-10">الهندسة المعلوماتية</option>
                <option value="civil" className="text-l">الهندسة المدنية</option>
                <option value="arch" className="text-l">هندسة العمارة</option>
                <option value="midicen" className="text-l">الطب البشري</option>
            </select>
        </div>
    )
}
export default Filter
