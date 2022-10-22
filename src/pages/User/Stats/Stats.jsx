import React from "react";
import Head from "../../../helpers/Head/Head";
import useFetch from "../../../hooks/useFetch";
import { STATS_GET } from "../../../http/api";
import Loading from "../../../helpers/Loading/Loading";
import Error from "../../../helpers/Error";

const StatsGraphs = React.lazy(() =>
  import("../../../components/User/Stats/StatsGraphs/StatsGraphs")
);

export default function Stats() {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <StatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
}
