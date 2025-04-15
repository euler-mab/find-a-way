"use client";

import { useEffect } from "react";
import { Container } from "@radix-ui/themes";

const Blog = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://substack.com/embedjs/embed.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    // Optional cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container size="4">
      <div className="substack-post-embed" data-id="hello-world">
        <p lang="en">Hello World! by Sophia Bentley</p>
        <p>This is my first Substack post.</p>
        <a data-post-link href="https://findawaycic.substack.com/p/hello-world">
          Read on Substack
        </a>
      </div>
    </Container>
  );
};

export default Blog;
