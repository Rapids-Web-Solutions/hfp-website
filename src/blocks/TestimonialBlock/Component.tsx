import React from 'react'
import { TestimonialBlock as TestimonialBlockProps } from '@/payload-types'
import { MainGrid } from '@/components/MainGrid'
import { Media } from '@/components/Media'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

export const TestimonialBlock: React.FC<TestimonialBlockProps> = ({ video, content }) => {
    const { heading, preHeading, testimonialContent } = content

    const { fullName, profilePic, testimonial } = testimonialContent
    return (
        <MainGrid className="lg:px-6">
            <iframe
                className="z-8 cursor-pointer col-span-6 col-start-1 rounded-[7rem] rounded-tl-none w-full h-96 row-start-1 lg:col-span-full"
                src={video.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="rounded-[7rem] z-11 rounded-tr-none h-96 bg-primary flex flex-col justify-center shadow-md col-span-7 lg:col-span-full col-start-6 lg:col-start-1 mt-44 lg:mt-0 gap-6 row-start-1 lg:row-start-2 p-16 lg:px-10 lg:py-16 lg:h-fit">
                <div className="flex items-center justify-between w-full">
                    <h6 className="text-secondary">{preHeading}</h6>
                    {!profilePic && (
                        <div className="text-6xl leading-[0]">
                            <FormatQuoteIcon fontSize="inherit" className="text-secondary" />
                        </div>
                    )}
                </div>
                <h3 className="text-ring">{heading}</h3>
                <div className="flex items-start gap-4">
                    {profilePic && (
                        <div className="w-auto lg:hidden">
                            <Media
                                resource={profilePic}
                                className="relative w-12 h-12 rounded-full overflow-hidden"
                                imgClassName="object-cover"
                                fill={true}
                                loading="lazy"
                            />
                        </div>
                    )}
                    <div className="flex flex-col lg:w-fit">
                        <div className="flex justify-between">
                            <h6 className="text-secondary pt-2">{fullName}</h6>
                            {profilePic && (
                                <div className="text-6xl leading-[0]">
                                    <FormatQuoteIcon
                                        fontSize="inherit"
                                        className="text-secondary"
                                    />
                                </div>
                            )}
                        </div>
                        <p className="italic lg:text-wrap">{testimonial}</p>
                    </div>
                </div>
            </div>
        </MainGrid>
    )
}
