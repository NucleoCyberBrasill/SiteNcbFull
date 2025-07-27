import { MainTemplate } from "@/templates/MainTemplate";

export function About(){
    return (
        <MainTemplate>
            <div className="h-[95vh] flex flex-col justify-center items-center gap-3">
                <h1 className="text-3xl text-center">Sobre o NCB</h1>
                <p className="text-justify max-w-xl px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quisquam molestiae neque totam error consectetur odio? Ipsam quo impedit neque repudiandae, odio dolorum velit? Sed error placeat neque quam maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic minima quam excepturi! Vitae, nobis corrupti. Odit debitis itaque delectus odio, maxime asperiores id enim consequuntur, accusantium eius velit molestias.</p>

                <p className="text-justify max-w-xl px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quisquam molestiae neque totam error consectetur odio? Ipsam quo impedit neque repudiandae, odio dolorum velit? Sed error placeat neque quam maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic minima quam excepturi! Vitae, nobis corrupti. Odit debitis itaque delectus odio, maxime asperiores id enim consequuntur, accusantium eius velit molestias.</p>
                <p className="text-justify max-w-xl px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quisquam molestiae neque totam error consectetur odio? Ipsam quo impedit neque repudiandae, odio dolorum velit? Sed error placeat neque quam maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic minima quam excepturi! Vitae, nobis corrupti. Odit debitis itaque delectus odio, maxime asperiores id enim consequuntur, accusantium eius velit molestias.</p>
            </div>
        </MainTemplate>
    )
}