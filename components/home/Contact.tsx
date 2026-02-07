import { ContactData } from "@/types/website";

export default function Contact({ data }: { data: ContactData }) {
  const { heading, subheading, form, mapPlaceholder, info } = data;

  return (
    <section className="relative flex flex-col lg:flex-row min-h-[600px]">
      {/* Left: Form */}
      <div className="w-full lg:w-1/2 bg-brand-paper p-12 lg:p-24 flex flex-col justify-center">
         <h2 className="text-3xl font-bold text-brand-dark mb-2">{heading}</h2>
         <p className="text-gray-600 mb-8">{subheading}</p>
         
         <form className="space-y-4">
           <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder={form.placeholders.name} className="p-4 bg-white border border-gray-300 focus:border-brand-bronze outline-none" />
              <input type="text" placeholder={form.placeholders.phone} className="p-4 bg-white border border-gray-300 focus:border-brand-bronze outline-none" />
           </div>
           <input type="email" placeholder={form.placeholders.email} className="w-full p-4 bg-white border border-gray-300 focus:border-brand-bronze outline-none" />
           <select className="w-full p-4 bg-white border border-gray-300 focus:border-brand-bronze outline-none text-gray-500">
              <option>{form.placeholders.role}</option>
              {form.roles.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
           </select>
           <textarea placeholder={form.placeholders.message} rows={4} className="w-full p-4 bg-white border border-gray-300 focus:border-brand-bronze outline-none"></textarea>
           
           <button className="w-full py-4 bg-brand-dark text-white font-bold uppercase tracking-widest hover:bg-brand-bronze hover:text-brand-dark transition-colors">
             {form.button}
           </button>
         </form>
      </div>

      {/* Right: Map Texture */}
      <div className="w-full lg:w-1/2 bg-gray-300 relative min-h-[400px] lg:min-h-full">
         <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
            {/* Map Placeholder */}
            <div className="text-center">
               <p className="text-gray-500 mb-4">{mapPlaceholder}</p>
               <div className="bg-brand-dark p-6 text-white inline-block text-left shadow-2xl border-l-4 border-brand-bronze">
                  <h4 className="font-bold text-lg mb-2">{info.title}</h4>
                  <p className="text-sm text-gray-400 whitespace-pre-line">{info.address}</p>
                  <p className="text-brand-bronze mt-4 font-bold">{info.email}</p>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
