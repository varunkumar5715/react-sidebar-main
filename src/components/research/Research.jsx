
import {useContext} from 'react';
import ResearchData from '../../data/research.json';
import Publication from './Publication';
import PositionContext from '../../store/RouteContextProvider';

export default function Research() {
  const {current} = useContext(PositionContext)
  const { publications, news, links } = ResearchData[current-1];

  console.log(ResearchData[current-1])
  return (
    <div>
      <h4>Research Publications</h4>
      <ul>
        {publications.map((publication, index) => (
          <Publication key={index} year={publication.year} data={publication.data} />
        ))}
      </ul>

      <h4>News</h4>
      <ul>
        {news.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h4>Links</h4>
      <ul>
        {links.map((link, index) => (
          <div>
            <li key={index}>{link.title}</li>
            <a href={link.path} target="_blank">https://play.google.com/store/apps/details?id=com.rhythmic_breathing.app&hl=en_IN&gl=U</a>
          </div>
        ))}
      </ul>
    </div>
  );
}
