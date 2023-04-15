import { PromptWork } from "./Sub/PromptWork"

export class PromptEditorClass {
    data = {
        server : location.host.startsWith("localhost")
            ? "https://p.ohhai.top"
            : "https://p.ohhai.top",
        enablePngExportFixed: false,
        enablePngExportCopy: false,
    }

    works: PromptWork[] = [
        new PromptWork({
            initText: `forest, big bad wolf, unreal engine, UHD, super detail, cinematic lighting, --aspect 2:3`,
        }),
        new PromptWork({
            // initText: `symmetrical,(PureErosFace_V1:0.8), [:(highly detail face: 1.2):0.1],[to:when],[from::when], [[df]], (((twintails))), <lora:koreanDollLikeness_v10:0.5>`,
            // parser: "stable-diffusion-webui",
        }),
    ]
    addWorkspace() {
        this.works.push(new PromptWork())
    }
    removeWorkspace(promptWork: PromptWork) {
        this.works = this.works.filter((item) => item !== promptWork)
    }
}
