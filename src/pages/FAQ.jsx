import Faq from "react-faq-component";

const data = {
    title: "FAQ",
    rows: [
        {
            title: "What products do you offer?",
            content: `We offer a wide range of phone covers, mobiles, accessories, and screen protectors for various brands and models.`,
        },
        {
            title: "How can I contact customer support?",
            content: `You can reach our customer support team via email at [support@example.com](mailto:support@example.com) or by calling us at (123) 456-7890. We’re also available through our live chat feature on the website.`,
        },
        {
            title: "Where are you located?",
            content: `Our headquarters are based in [City, Country]. We offer shipping to many locations around the world.`,
        },
        {
            title: "How do I place an order?",
            content: `Browse our product categories, select the items you want, add them to your cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.`,
        },
        {
            title: "What payment methods do you accept?",
            content: `We accept various payment methods including credit/debit cards, PayPal, and other secure payment options.`,
        },
 
 
    ],
};

const styles = {
    bgColor: 'white',
    // titleTextColor: "blue",
    // rowTitleColor: "blue",
    rowContentColor: 'grey',
    arrowColor: "gray",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};

const FAQ = () => {

  return (
    <div className='container mt-16 px-4 md:px-0'>
        <div className='md:flex gap-12'>
            <div className='mb-5 md:mb-0 flex-1'>
              <div>
                <img src="/images/FAQ/faq.jpg" alt="" />
                <p className='text-center w-[70%] mx-auto'>If you  can any questions , We have answers for you here incase you dont you can contact us here</p>

              </div>
            </div>
            <div className='flex-1 '>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
            </div>
        </div>
      
    </div>
  )
}

export default FAQ