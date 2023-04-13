
// { contactId: [ '1', '2', '3' ] }   ===> localhost:3000/contact/1/2/3  ===> contact Detail 123
const ContactDetail = ({params} : {params : {contactId : string}})=>{
    console.log(params)
    return (
        <div>
            {/* Contact Detail  : {params.contactId[0]} */}
            Contact Detail  : {params.contactId}
        </div>
    )
}


export default ContactDetail;