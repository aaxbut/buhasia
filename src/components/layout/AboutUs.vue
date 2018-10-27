<template>
  <div class="section type-1 jumper"
       id="jump1"
       style="padding-bottom: 0">
    <div class="container">
      <div class="section-headlines">
        <h4>
          Немного о нас</h4>
        <h2>
          Что бы Вам было лечге работать. Мы всегда в теме учета.</h2>
        <div>
          Наши сотрудники всегда являются настоящими экспертами в области
          учета. Необходимые знания всегда в актуальном состоянии.
        </div>
      </div>

      <div class="mixitup">
        <ul id="portfolio"
            class="unstyled">

          <li id="phone"
              class="mix phone"
              data-target="#myModal">
            <div>
              <div class="media-thumb">

                <img src="@/assets/images/portfolio/certs.png"
                     alt="">
                <div class="media-desc">
                  <div>
                    <p>
                    <b>Сертификаты</b></p>
                    <div>
                      Полученные нами сертификаты, всегда в актуальном
                      состоянии.
                    </div>
                  </div>
                </div>


              </div>

            </div>
          </li>

          <li id="table"
              class="mix tablet"
              data-form="blogitems">
            <div>
              <div class="media-thumb">
                <img src="@/assets/images/portfolio/blog.png"
                     alt="">
                <div class="media-desc">
                  <div>
                    <p>
                    <b>Блог</b></p>
                    <div>
                      Обсуждение самых последних новостей учета.</div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="mix desktop"
              data-form="costservice">

            <div>
              <div class="media-thumb">
                <img src="@/assets/images/portfolio/price-tag.png"
                     alt="">
                <div class="media-desc">
                  <div>
                    <p>
                    <b>Стоимость</b></p>
                    <div>
                      Можно подобрать услуги которые Вам неоходимы,
                      и Вам будет намного проще выбрать по стоимости.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutUs',
};
</script>

<style scoped>
  </style>
