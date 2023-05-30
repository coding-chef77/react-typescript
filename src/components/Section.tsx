import { ReactElement } from "react";


type SectionProps = {
    title?: string;
    children: React.ReactNode;
    };


const Section = ({title = "My Subheading", children}:SectionProps): ReactElement => {
    return (
        <section>
        <h2>{title}</h2>
        {children}
        </section>
    )
    }

    export default Section;