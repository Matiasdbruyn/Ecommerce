import { useTheme } from "../../context/ThemeContext"

export default function NotFound() {
    const {darkMode} = useTheme()
    return (
        <div>NotFound</div>
    )
}