import { RepoProps } from "../../types/repos"
import styles from './Repo.module.css'

import { BsCodeSlash } from "react-icons/bs"
import { AiOutlineStar, AiOutlineFork, AiFillGithub } from 'react-icons/ai'


export default function Repo({ name, language, html_url, forks, star }: RepoProps) {
    return (
        <div className={styles.repo}>
            <h3>{name}</h3>
            <p>
                <BsCodeSlash />
                {language}
            </p>

            <div className={styles.stats}>
                <div className={styles.star_forks}>
                    <AiOutlineStar />
                    <span>{star} 0</span>
                </div>
                <div className={styles.star_forks}>
                    <AiOutlineFork />
                    <span>{forks}</span>
                </div>
            </div>
            <a href={html_url} target="_blank">
                <span>Ver Código</span>
                <AiFillGithub />
            </a>
        </div>
    )
}
