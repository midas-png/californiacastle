import { BenefitWrapper, BenefitDescription } from './styles';
import { Title } from 'ui';

export const Benefit = ({ title, description }) => (
  <BenefitWrapper>
    {title && (
      <Title variant='h2' secondaryFont>
        {title}
      </Title>
    )}
    {description && <BenefitDescription>{description}</BenefitDescription>}
  </BenefitWrapper>
);
