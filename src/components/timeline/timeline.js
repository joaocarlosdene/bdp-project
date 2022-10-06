import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//import Styles from './timeline.module.css'
import './timeline.css'
import { FaHammer, FaCheck } from 'react-icons/fa'
import React from 'react';

function timeline() {
    return (
        <VerticalTimeline className='VerticalTimeline' >
            <VerticalTimelineElement
                className="vertical-timeline-element--work analise"
                contentStyle={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
                contentArrowStyle={{ borderRight: '7px solid white ' }}
                date=""
                iconStyle={{ background: 'rgb(33, 150, 243)', color: 'white', }}
                icon={<FaHammer />}
            >
                <h3 className="vertical-timeline-element-title">Analise Geral do Projeto</h3>
                <p>Este é o momento de identificar os participantes e começar a primeira fase de pesquisa. É também uma boa ideia documentar o projeto por escrito para que se possa facilmente distribuir o plano de comunicação ao resto da equipe. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work planejamento"
                contentStyle={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
                date=""
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaHammer />}
            >
                <h3 className="vertical-timeline-element-title">Planejamento</h3>
                <p>Na etapa de planejamento da gestão de projetos, alinhamos expectativas e criamos metas claras usando um roteiro do projeto.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work execucao"
                contentStyle={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'  }}
                date=""
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaHammer />}
            >
                <h3 className="vertical-timeline-element-title">Execucao</h3>
                <p>Na etapa de execução, a equipe se concentrará em atingir os objetivos. Ela utilizará as informações coletadas nas duas primeiras etapas para criar e lançar o projeto no prazo especificado a partir do trabalho em equipe e da colaboração.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work desempenho"
                contentStyle={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
                date=""
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaHammer />}
            >
                <h3 className="vertical-timeline-element-title">Desempenho</h3>
                <p>Ser capaz de melhorar o projeto é um motivo significativo,Uma das primeiras métricas de desempenho que se deve considerar é o objetivo inicial. O projeto abordou o problema que se procurava resolver?</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education encerramento"
                contentStyle={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
                date=""
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaHammer />}
            >
                <h3 className="vertical-timeline-element-title">Encerramento</h3>
                <p>Ao encerrar um projeto, talvez seja boa ideia reunir-se com os participantes do projeto e analisar em profundidade todos os processos e deicisoes tomadas.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                contentStyle={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'    }}
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<FaCheck/>}

            >
                <h3 className="vertical-timeline-element-title">Projeto Concluido</h3>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default timeline;