import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { formatDateTime } from "../../utils/dateTimeUtil";
import classes from "./BlogDetail.module.scss";

const BlogDetail = ({ blog }: any) => {

    return (
        <div className={classes['blog-detail-section']}>
            <Link href="/blog">
                <div className={classes['back-section']}>
                    <Icon icon="akar-icons:arrow-left" fontSize={20} color="#9C9C9C" />
                    <small className={classes['back-text']}><i>Back to Blog list</i></small>
                </div>
            </Link>
            <div className={classes['main-text-intro']}>
                <p><span className={classes['blog-title']}>{blog.title}</span> - <small className={classes['days-posted']}><i>{blog.read_time} min read</i></small></p>
                <p><small className={classes['days-posted']}>{formatDateTime(blog.updated_on)}</small></p>
            </div>
            <div>
                <div className={classes['blog-detail-main-image']} >
                    <Image src={"/temp.jpeg"} height={100} width={100} layout="fill" objectFit="cover" />
                </div>
                <div className={classes['blog-detail-main-text']} dangerouslySetInnerHTML={{ __html: blog.content }}>
                    {/* <p >{blog.content}</p> */}
                </div>
            </div>
        </div>
    )

};

export default BlogDetail;