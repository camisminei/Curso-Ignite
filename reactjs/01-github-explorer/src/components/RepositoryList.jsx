import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

const repository = {
    name: "unform2",
    description: "Forms in React",
    link: "https://github.com/camisminei"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositório</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem />
            </ul>
        </section>
    );
}