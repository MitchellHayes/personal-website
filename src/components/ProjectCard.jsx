import React, { useState } from 'react';
import { GitHubIcon, ExternalLinkIcon, LockIcon } from './Icons';

/**
 * Image that degrades to a lettered placeholder if the file is missing,
 * so a tile never shows a broken-image icon or raw alt text.
 */
const TeaserImage = ({ src, alt, fallback }) => {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="project-media--placeholder" aria-label={alt} role="img">
        <span>{fallback}</span>
      </div>
    );
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
};

/**
 * Renders the teaser image(s) for a project.
 *
 * One image: a plain 16:10 screenshot.
 * Two images (tablet + phone): a device composite with the phone overlaid
 * on the tablet's corner, used for projects that live on more than one screen.
 */
const ProjectMedia = ({ project }) => {
  const { images = [], title } = project;
  const tablet = images.find((i) => i.kind === 'tablet') || images[0];
  const phone = images.find((i) => i.kind === 'phone');

  if (!tablet) {
    return (
      <div className="project-media project-media--placeholder" aria-hidden="true">
        <span>{title.charAt(0)}</span>
      </div>
    );
  }

  if (phone && phone === images[0] && images.length === 1) {
    return (
      <div className="project-media project-media--phone-only">
        <div className="device device--phone-solo">
          <TeaserImage src={phone.src} alt={phone.alt} fallback={title.charAt(0)} />
        </div>
      </div>
    );
  }

  if (phone) {
    return (
      <div className="project-media project-media--composite">
        <div className="device device--tablet">
          <TeaserImage src={tablet.src} alt={tablet.alt} fallback={title.charAt(0)} />
        </div>
        <div className="device device--phone">
          <TeaserImage src={phone.src} alt={phone.alt} fallback="" />
        </div>
      </div>
    );
  }

  return (
    <div className="project-media">
      <TeaserImage src={tablet.src} alt={tablet.alt} fallback={title.charAt(0)} />
    </div>
  );
};

const ProjectLinks = ({ project }) => {
  const { live, code, note, title } = project;

  if (!live && !code) {
    return (
      <p className="project-note">
        <LockIcon />
        <span>{note || 'Not publicly available'}</span>
      </p>
    );
  }

  return (
    <div className="project-links">
      {live && (
        <a
          className="btn btn--primary"
          href={live}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${title}`}
        >
          <ExternalLinkIcon size={18} />
          <span>Visit</span>
        </a>
      )}
      {code && (
        <a
          className="btn btn--ghost"
          href={code}
          target="_blank"
          rel="noreferrer"
          aria-label={`View the source code for ${title} on GitHub`}
        >
          <GitHubIcon size={18} />
          <span>Code</span>
        </a>
      )}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const { id, title, blurb, tags = [] } = project;

  return (
    <article id={`project-${id}`} className="project">
      <ProjectMedia project={project} />
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        {blurb && <p className="project-blurb">{blurb}</p>}
        {tags.length > 0 && (
          <ul className="project-tags" aria-label="Technologies">
            {tags.map((tag) => (
              <li key={tag} className="project-tag">
                {tag}
              </li>
            ))}
          </ul>
        )}
        <ProjectLinks project={project} />
      </div>
    </article>
  );
};

export default ProjectCard;
