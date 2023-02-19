import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const SectionContainer: FC<Props> = ({ children, className }): JSX.Element => {
  return (
    <section
      className={'w-full mt-6 md:mt-7 lg:mt-8 xl:mt-12 2xl:mt-16 ' + (className ? className : '')}
    >
      {children}
    </section>
  )
}

export { SectionContainer }
