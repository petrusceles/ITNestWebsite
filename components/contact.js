

export default function Contact() {
    return (
        <>
            <div className="grid grid-cols-1 py-36 gap-3">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold mx-auto">CONTACT</h1>
                    <p className="mx-auto">Get in touch with us</p>
                </div>
                <div className="flex flex-col gap-2">
                    <label for='name' className="font-medium text-sm">Name</label>
                    <input type="text" name="name" id="name" className="outline-0 p-2 border-2 rounded-lg border-primary"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label for='email' className="font-medium text-sm">Email</label>
                    <input type="email" name="email" id="email" className="outline-0 p-2 border-2 rounded-lg border-primary peer"/>
                    <p class="hidden peer-invalid:block text-red-700 text-sm font-normal">
                        please enter a valid email address
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <label for='message' className="font-medium text-sm">Message</label>
                    <textarea name="message" id="message" className="outline-0 pr-4 py-3 pl-3 border-2 rounded-lg border-primary h-44 align-top mt-0 scrollbar-thumb-primary resize-none scrollbar-thin"/>
                </div>
                <div className="flex justify-end">
                    <button className="font-semibold bg-primary py-2 align-middle text-center text-white px-9 rounded-lg">Submit</button>
                </div>
            </div>
        </>
    )
}