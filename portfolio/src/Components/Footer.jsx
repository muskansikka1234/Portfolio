import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t borderborder mt-12 pt-8 flex flex-wrap justify-between items-center">
            {" "}
            <p className="text-sm text-muted-foreground">
                {" "}
            <p>&copy; {new Date().getFullYear()} Muskan.co, All rights reserved.</p>
            </p>

            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ArrowUp size={20}/>
            </a>
        </footer>
    )
}