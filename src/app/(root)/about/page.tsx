import IconAngularJS from "@/assets/icons/logo/outlline/IconAngularJS";
import IconBitbuckit from "@/assets/icons/logo/outlline/IconBitbuckit";
import IconBootStrap from "@/assets/icons/logo/outlline/IconBootStrap";
import IconCSharp from "@/assets/icons/logo/outlline/IconCSharp";
import IconCss from "@/assets/icons/logo/outlline/IconCss";
import IconDjango from "@/assets/icons/logo/outlline/IconDjango";
import IconGithub from "@/assets/icons/logo/outlline/IconGithub";
import IconGitlab from "@/assets/icons/logo/outlline/IconGitlab";
import IconHTML from "@/assets/icons/logo/outlline/IconHTML";
import IconJava from "@/assets/icons/logo/outlline/IconJava";
import IconJavaScript from "@/assets/icons/logo/outlline/IconJavaScript";
import IconNetCore from "@/assets/icons/logo/outlline/IconNetCore";
import IconNextJS from "@/assets/icons/logo/outlline/IconNextJS";
import IconPython from "@/assets/icons/logo/outlline/IconPython";
import IconReactJS from "@/assets/icons/logo/outlline/IconReactJS";
import IconSQLServer from "@/assets/icons/logo/outlline/IconSQLServer";
import IconTypeScript from "@/assets/icons/logo/outlline/IconTypeScript";
import IconVueJS from "@/assets/icons/logo/outlline/IconVueJS";



export default function Page() {
    return (
        <>
        <div>About Travel LHL Tính năng đang trong giai đoạn phát triển</div>
        <video src="videos/video.mp4" controls preload="metadata"
            style={{width: '100%',  maxWidth: '720px', maxHeight: '720px', borderRadius: '12px ', boxShadow: '0 4px 12px rgba(0,0,0,0.3)'}}
        >
        </video>

        <div className="flex justify-center gap-12">
            <div>
                <h1>Framework</h1>
                    <IconAngularJS />
                    <IconVueJS />
                    <IconReactJS />
                    <IconNextJS />
                    <IconDjango />
                    <IconNetCore />
            </div>

            <div>
                <h1>Language Programming</h1>
                <IconJavaScript />
                <IconTypeScript />
                <IconPython />
                <IconJava />
                <IconCSharp />
                <IconSQLServer />
                <IconHTML />
                <IconCss />
            </div>

             <div>
                <h1>Source management</h1>
                <IconGithub />
                <IconGitlab />
                <IconBitbuckit />
            </div>

            <div>
                <h1>Libary UI</h1>
                <IconBootStrap />
            </div>
        </div>





        </>
    )
}