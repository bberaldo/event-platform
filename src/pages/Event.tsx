import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export default function Event(){
    const {slug} = useParams<{slug:string}>();
    
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1">
                {slug 
                    ? <Video lessonSlug={slug}/> 
                    : <div className="flex-1"></div>}
                <Sidebar/>
            </main>
        </div>
        // quando dois ou mais conteudos estão embaixo um do outro, é necessário que alguma coisa esteja em volta delas, por exmeplo uma div 
    )
}