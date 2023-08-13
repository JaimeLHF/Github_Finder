import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { RepoProps } from "../types/repos"
import Repo from "../components/Repo/Repo"

import styles from './Repos.module.css'
import ButtonBack from "../components/ButtonBack/ButtonBack"
import Loader from "../components/Loader/Loader"


export default function Repos() {

    const { username } = useParams()
    const [repos, setRepos] = useState<RepoProps[] | [] | null>(null)

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const loadRepos = async function (username: string) {
            setIsLoading(true)
            const res = await fetch(`https://api.github.com/users/${username}/repos`);

            const data = await res.json()
            console.log(data)
            setRepos(data)
            setIsLoading(false)
        }

        if (username) {
            loadRepos(username);
        }

    }, []);

    if (!repos && isLoading) {
        return <Loader />
    }

    return (
        <div className={styles.repos}>
            <ButtonBack />
            <h2>Explore os repositórios do usuário  {username}</h2>
            {repos && repos.length === 0 && <p>Não há repositórios!</p>}
            {repos && repos.length > 0 && (
                <div>
                    {repos.map((repo: RepoProps) => (
                        <Repo key={repo.name} {...repo} />
                    ))}
                </div>
            )}
        </div>

    )
}
