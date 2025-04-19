import EditButtonPage from "@/components/templates/Admin/EditButtonPage"


export default function EditButton({ params }) {
    const { id } = params;


    return <EditButtonPage id={id} />;
}


