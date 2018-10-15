<template>
  <main>
    <section class="dashboard-content">
      <h3>
        Dashboard
      </h3>
      <section class="total-data">
        <h3 class="content-block container-block total-data__title">
          {{ month }}
        </h3>
        <ul class="content-block container-block total-data__list">
          <li class="total-data__item">
            <div class="total-data__item-title">
              # of Monthly Active Users
            </div>
            <div class="total-data__item-value">{{ total_data_month }}</div>
          </li>
          <li class="total-data__item">
            <div class="total-data__item-title">
              # of Monthly Active Users
            </div>
            <div class="total-data__item-value">{{ total_data_month }}</div>
          </li>
          <li class="total-data__item">
            <div class="total-data__item-title">
              # of Monthly Active Users
            </div>
            <div class="total-data__item-value">{{ total_data_month }}</div>
          </li>
          <li class="total-data__item">
            <div class="total-data__item-title">
              # of Monthly Active Users
            </div>
            <div class="total-data__item-value">{{ total_data_month }}</div>
          </li>
        </ul>
      </section>

    </section>
    <section class="total-data">
      <h3 class="content-block container-block total-data__title">
        {{ month }}
      </h3>
      <ul class="content-block container-block total-data__list">
        <li class="total-data__item">
          <div class="total-data__item-title">
            # of Monthly Active Users
          </div>
          <div class="total-data__item-value">{{ total_data_month }}</div>
        </li>
        <li class="total-data__item">
          <div class="total-data__item-title">
            # of Monthly Active Users
          </div>
          <div class="total-data__item-value">{{ total_data_month }}</div>
        </li>
        <li class="total-data__item">
          <div class="total-data__item-title">
            # of Monthly Active Users
          </div>
          <div class="total-data__item-value">{{ total_data_month }}</div>
        </li>
        <li class="total-data__item">
          <div class="total-data__item-title">
            # of Monthly Active Users
          </div>
          <div class="total-data__item-value">{{ total_data_month }}</div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      total_data_month: 14,
      month:            'June',
    };
  },
};

</script>

<style scoped>
.dashboard-content {
  border: 1px solid #0d47a1;
  justify-content: center;
}

.total-data {
  padding-top: 25px;
  padding-bottom: 30px;
}

.total-data__title {
  font-size: 18px;
  line-height: 28px;
  font-family: 'Caviar Dreams', sans-serif;
  font-weight: bold;
  color: #2a2a2a;
}

.total-data__list {
  padding-top: 21px;
  list-style: none;
}

.total-data__item {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  box-shadow: 0 2px 4px 0 #a1a9b2;
  border-radius: 8px;
  width: calc((100% - 3 * 28px) / 4);
  padding-top: 45px;
  padding-bottom: 63px;
  background-color: #f9fcff;
}

.total-data__item-title {
  font-size: 12px;
  line-height: 20px;
  font-style: italic;
  color: #4a4a4a;
}

.total-data__item-value {
  position: relative;
  min-height: 50px;
  padding-top: 11px;
  font-size: 36px;
  line-height: 42px;
  color: #000;
  letter-spacing: -1px;
}

.content-block {
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-between;
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  padding-right: 33px;
  padding-left: 33px;
}

</style>
