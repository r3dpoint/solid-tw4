import "~/style/app.css";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { JSX } from "solid-js/jsx-runtime";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// function Icon24OutlineMenuOpen(props: { class?: string }) {
//   return (
//     <svg
//       aria-hidden="true"
//       class={cn(props.class, "h-24", "w-24", "shrink-0", "fill-current")}
//       data-slot="icon"
//     >
//       <path d="M4.5 18C4.21667 18 3.97917 17.9042 3.7875 17.7125C3.59583 17.5208 3.5 17.2833 3.5 17C3.5 16.7167 3.59583 16.4792 3.7875 16.2875C3.97917 16.0958 4.21667 16 4.5 16H15.5C15.7833 16 16.0208 16.0958 16.2125 16.2875C16.4042 16.4792 16.5 16.7167 16.5 17C16.5 17.2833 16.4042 17.5208 16.2125 17.7125C16.0208 17.9042 15.7833 18 15.5 18H4.5ZM19.4 16.3L15.8 12.7C15.6 12.5 15.5 12.2667 15.5 12C15.5 11.7333 15.6 11.5 15.8 11.3L19.4 7.7C19.5833 7.51667 19.8167 7.425 20.1 7.425C20.3833 7.425 20.6167 7.51667 20.8 7.7C20.9833 7.88333 21.075 8.11667 21.075 8.4C21.075 8.68333 20.9833 8.91667 20.8 9.1L17.9 12L20.8 14.9C20.9833 15.0833 21.075 15.3167 21.075 15.6C21.075 15.8833 20.9833 16.1167 20.8 16.3C20.6167 16.4833 20.3833 16.575 20.1 16.575C19.8167 16.575 19.5833 16.4833 19.4 16.3ZM4.5 13C4.21667 13 3.97917 12.9042 3.7875 12.7125C3.59583 12.5208 3.5 12.2833 3.5 12C3.5 11.7167 3.59583 11.4792 3.7875 11.2875C3.97917 11.0958 4.21667 11 4.5 11H12.5C12.7833 11 13.0208 11.0958 13.2125 11.2875C13.4042 11.4792 13.5 11.7167 13.5 12C13.5 12.2833 13.4042 12.5208 13.2125 12.7125C13.0208 12.9042 12.7833 13 12.5 13H4.5ZM4.5 8C4.21667 8 3.97917 7.90417 3.7875 7.7125C3.59583 7.52083 3.5 7.28333 3.5 7C3.5 6.71667 3.59583 6.47917 3.7875 6.2875C3.97917 6.09583 4.21667 6 4.5 6H15.5C15.7833 6 16.0208 6.09583 16.2125 6.2875C16.4042 6.47917 16.5 6.71667 16.5 7C16.5 7.28333 16.4042 7.52083 16.2125 7.7125C16.0208 7.90417 15.7833 8 15.5 8H4.5Z" />
//     </svg>
//   );
// }

function Icon20OutlineMenuOpen(props: { class?: string }) {
  return (
    <svg
      aria-hidden="true"
      class={cn(props.class, "h-24", "w-24", "shrink-0", "fill-current")}
      data-slot="icon"
    >
      <path
        id="Vector"
        d="M3.33333 15C3.09722 15 2.89931 14.9201 2.73958 14.7604C2.57986 14.6007 2.5 14.4028 2.5 14.1667C2.5 13.9306 2.57986 13.7326 2.73958 13.5729C2.89931 13.4132 3.09722 13.3333 3.33333 13.3333H12.5C12.7361 13.3333 12.934 13.4132 13.0938 13.5729C13.2535 13.7326 13.3333 13.9306 13.3333 14.1667C13.3333 14.4028 13.2535 14.6007 13.0938 14.7604C12.934 14.9201 12.7361 15 12.5 15H3.33333ZM15.75 13.5833L12.75 10.5833C12.5833 10.4167 12.5 10.2222 12.5 10C12.5 9.77778 12.5833 9.58333 12.75 9.41667L15.75 6.41667C15.9028 6.26389 16.0972 6.1875 16.3333 6.1875C16.5694 6.1875 16.7639 6.26389 16.9167 6.41667C17.0694 6.56944 17.1458 6.76389 17.1458 7C17.1458 7.23611 17.0694 7.43056 16.9167 7.58333L14.5 10L16.9167 12.4167C17.0694 12.5694 17.1458 12.7639 17.1458 13C17.1458 13.2361 17.0694 13.4306 16.9167 13.5833C16.7639 13.7361 16.5694 13.8125 16.3333 13.8125C16.0972 13.8125 15.9028 13.7361 15.75 13.5833ZM3.33333 10.8333C3.09722 10.8333 2.89931 10.7535 2.73958 10.5938C2.57986 10.434 2.5 10.2361 2.5 10C2.5 9.76389 2.57986 9.56597 2.73958 9.40625C2.89931 9.24653 3.09722 9.16667 3.33333 9.16667H10C10.2361 9.16667 10.434 9.24653 10.5938 9.40625C10.7535 9.56597 10.8333 9.76389 10.8333 10C10.8333 10.2361 10.7535 10.434 10.5938 10.5938C10.434 10.7535 10.2361 10.8333 10 10.8333H3.33333ZM3.33333 6.66667C3.09722 6.66667 2.89931 6.58681 2.73958 6.42708C2.57986 6.26736 2.5 6.06944 2.5 5.83333C2.5 5.59722 2.57986 5.39931 2.73958 5.23958C2.89931 5.07986 3.09722 5 3.33333 5H12.5C12.7361 5 12.934 5.07986 13.0938 5.23958C13.2535 5.39931 13.3333 5.59722 13.3333 5.83333C13.3333 6.06944 13.2535 6.26736 13.0938 6.42708C12.934 6.58681 12.7361 6.66667 12.5 6.66667H3.33333Z"
      />
    </svg>
  );
}

function Icon20OutlineMenuClose(props: { class?: string }) {
  return (
    <svg
      aria-hidden="true"
      class={cn(props.class, "h-24", "w-24", "shrink-0", "fill-current")}
      data-slot="icon"
    >
      <path d="M2.5 5.83333C2.5 5.3731 2.8731 5 3.33333 5H16.6667C17.1269 5 17.5 5.3731 17.5 5.83333C17.5 6.29357 17.1269 6.66667 16.6667 6.66667H3.33333C2.8731 6.66667 2.5 6.29357 2.5 5.83333Z" />
      <path d="M2.5 10C2.5 9.53976 2.8731 9.16667 3.33333 9.16667H16.6667C17.1269 9.16667 17.5 9.53976 17.5 10C17.5 10.4602 17.1269 10.8333 16.6667 10.8333H3.33333C2.8731 10.8333 2.5 10.4602 2.5 10Z" />
      <path d="M3.33333 13.3333C2.8731 13.3333 2.5 13.7064 2.5 14.1667C2.5 14.6269 2.8731 15 3.33333 15H16.6667C17.1269 15 17.5 14.6269 17.5 14.1667C17.5 13.7064 17.1269 13.3333 16.6667 13.3333H3.33333Z" />
    </svg>
  );
}

function AppFrame() {
  return (
    <>
      <AppFrameSm class="md:hidden" />
      <AppFrameMd class="max-md:hidden" />
    </>
  );
}

function NavDrawer(props: { class: string; children: JSX.Element }) {
  return (
    <>
      <div class={props.class}>{props.children}</div>
    </>
  );
}

function AppFrameSm(props: { class?: string }) {
  return (
    <>
      <div class={props.class}>
        <label for="navDrawerCompact" class="peer">
          <input type="checkbox" id="navDrawerCompact" class="peer hidden" />
          <Icon20OutlineMenuOpen class="peer-checked:hidden" />
          <Icon20OutlineMenuClose class="hidden peer-checked:block" />
        </label>
        <NavDrawer class="hidden peer-has-[:checked]:inline">
          <div>NavDrawer Sm</div>
        </NavDrawer>
      </div>
    </>
  );
}

function AppFrameMd(props: { class?: string }) {
  return (
    <>
      <div class={props.class}>
        <label for="navDrawerMedium" class="peer">
          <input type="checkbox" id="navDrawerMedium" class="peer hidden" />
          <Icon20OutlineMenuOpen class="peer-checked:hidden" />
          <Icon20OutlineMenuClose class="hidden peer-checked:block" />
        </label>
        <NavDrawerMdWide class="peer-has-[:checked]:hidden" />
        <NavDrawerMdNarrow class="hidden peer-has-[:checked]:inline" />
      </div>
    </>
  );
}

function NavDrawerMdWide(props: { class: string }) {
  return (
    <div class={cn(props.class, "h-full", "w-fg-[256px]")}>
      <NavDrawer class="bg-fg-light-action-state-activated-primary">
        <div>NavDrawer Md Wide</div>
      </NavDrawer>
    </div>
  );
}

function NavDrawerMdNarrow(props: { class: string }) {
  return (
    <div class={cn(props.class, "h-full", "w-fg-104")}>
      <NavDrawer class="bg-fg-light-action-state-activated-primary">
        <div>NavDrawer Md Narrow</div>
      </NavDrawer>
    </div>
  );
}
export default function App() {
  return (
    <main class="flex flex-col gap-24">
      <div class="light">
        <div class="bg-light-layout-background-strong-component text-light-text-default h-app-bar border-light-layout-border-strong flex items-center justify-between self-stretch border-b">
          <div class="h-button w-button flex items-center justify-center gap-8 px-[32px] py-[12px]">
            <Icon20OutlineMenuOpen />
          </div>
        </div>
      </div>
      <AppFrame />
    </main>
  );
}
