import React from 'react';
import { Card, CardBody, Col, Button } from "reactstrap";
import Reveal from "react-awesome-reveal";
export type IProjectsCardProps = {
    data: {
        name: string,
        desc: string
        github?: string
        link?: string
    }
}

const ProjectsCard: React.FC<IProjectsCardProps> = ({ data }) => {
    return (
        <Col lg="6">
            <Reveal triggerOnce duration={2000} >
                <Card className="shadow-lg--hover shadow mt-4">
                    <CardBody>
                        <div className="d-flex px-3">
                            <div className="pl-4">
                                <h3>{data.name}</h3>
                                <p className="description mt-3">{data.desc}</p>
                                {data.github ? (
                                    <Button
                                        className="btn-icon"
                                        color="github"
                                        href={data.github}
                                        target="_blank"
                                        rel="noopener"
                                        aria-label="Github"
                                    >
                                        <span className="btn-inner--icon">
                                            <i className="fa fa-github" />
                                        </span>
                                    </Button>
                                ) : null}
                                {data.link ? (
                                    <Button
                                        className="btn-icon"
                                        color="success"
                                        href={data.link}
                                        target="_blank"
                                        rel="noopener" aria-label="Twitter"
                                    >
                                        <span className="btn-inner--icon">
                                            <i className="fa fa-arrow-right mr-2" />
                                        </span>
                                        <span className="nav-link-inner--text ml-1">
                                            Demo
                                        </span>
                                    </Button>
                                ) : null}
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Reveal>
        </Col>
    );
}
export default ProjectsCard 