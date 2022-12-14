import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import ConfirmModal from './ConfirmModal';

const Contact = () => {

    const [modalOpen, setModalOpen] = useState(false);


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_uy3nv38', 'template_9yw4xam', form.current, 'D1R1Gj3BQg3c3_eT8')
        .then((result) => {
            console.log(result.text);
            setModalOpen(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <section class="text-gray-600 body-font relative" id='contact'>
        <div class="container px-5 py-12 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Ons</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Bent u geïnteresseerd geraakt? Stuur ons dan een bericht met uw wensen en dan gaan we uw wensen verwezenlijken. Wilt u een vraag stellen? Dan kan dat natuurlijk ook door het formulier in te vullen.</p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Naam</label>
                                <input type="text" id="name" name="from_name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="user_email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-600">Bericht</label>
                                <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <button class="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg" type='submit'>Verstuur</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        {modalOpen && <ConfirmModal setOpenModal={setModalOpen} />}
    </section>
  )
}

export default Contact